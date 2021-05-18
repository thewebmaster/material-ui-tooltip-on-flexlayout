import React, { useState } from 'react';
import FlexLayout from "flexlayout-react";
import './App.css';
import 'flexlayout-react/style/gray.css'
import TabNode from 'flexlayout-react/declarations/model/TabNode';
import { createStyles, withStyles, Theme, WithStyles } from '@material-ui/core/styles';
import { Tooltip } from '@material-ui/core';

const style = (theme: Theme) => createStyles({
  panelLeft: {
    background: 'linear-gradient(to right, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.75) 70%, rgba(255,255,255,0.1) 100%)',
    bottom: 0,
    left: 0,
    paddingLeft: 2,
    position: 'absolute',
    top: 0,
  },
  sideButton: {
    '& .circle': {
      background: 'rgba(255, 255, 255, 0.75)',
      borderRadius: '50%',
      color: 'rgba(0, 0, 0, 0.54)',
      height: '3rem',
      padding: theme.spacing(1.5),
      width: '3rem',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  panelHost: {
    position: 'relative',
  },
  document: {
    '& .draggable': {
    },
    '&:not(:last-child)': {
      borderBottom: '1px solid rgba(224, 224, 224, 1)',
    },
    display: 'flex',
    flexDirection: 'column',
  },
  draggableContent: {
    alignItems: 'center',
    background: theme.palette.background.paper,
    display: 'inline-flex',
    height: 100,
    justifyContent: 'center',
    margin: 1,
    minWidth: 300,
  },
});

const json = {
  global: {},
  borders: [],
  layout:{
    "type": "row",
    "weight": 100,
    "children": [
      {
        "type": "tabset",
        "weight": 50,
        "selected": 0,
        "children": [
          {
            "type": "tab",
            "name": "Floatable Panel with Tooltip",
            "component": "floatable",
            "enableFloat": true,
          }
        ]
      },
      {
        "type": "tabset",
        "weight": 50,
        "selected": 0,
        "children": [
          {
            "type": "tab",
            "name": "Default Panel",
            "component": "default",
          }
        ]
      }
    ]
  }
};

const App: React.FunctionComponent<WithStyles> = ({ classes }) => {
  const [model] = useState(FlexLayout.Model.fromJson(json));

  const factory = (node: TabNode) => {
    const component = node.getComponent();
    if (component === "floatable") {
      return <div>
        <div className={classes.document}>
          <Tooltip PopperProps={{ popperOptions: { container: `document.body`} }} title={`This is a sample tooltip.`} disableFocusListener={true} placement={`top-start`}>
            <p>Hover over here..</p>
          </Tooltip>
        </div>
      </div>;
    } else if (component === "default") {
      return <div><p>This is a default panel</p></div>;
    }
  }
  return (
    <FlexLayout.Layout model={model} factory={factory} supportsPopout={true} />
  );
}

export default  withStyles(style)(App);
