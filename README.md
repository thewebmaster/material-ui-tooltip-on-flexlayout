# How to replicate the issue

1. Clone the project from github

```Bash
git clone git@github.com:thewebmaster/material-ui-tooltip-on-flexlayout.git
```

2. Once cloned, go to the project directory and run `npm install` and then `npm start` and the project will start and open up your browser to `http://localhost:3000/`

3. Test material tooltip on `Hover here...` text. You should be able to confirm that the material tooltip at this state is working.

![Image of Demo 1](https://github.com/thewebmaster/material-ui-tooltip-on-flexlayout/blob/main/demo/demo1.png?raw=true)

4. But if you open the `Floatable Panel` into a `new window` and hover over the `Hover here...` text, you'll see that the tooltip still appears from the original docked panel.

![Image of Demo 2](https://github.com/thewebmaster/material-ui-tooltip-on-flexlayout/blob/main/demo/demo2.png?raw=true)

![Image of Demo 3](https://github.com/thewebmaster/material-ui-tooltip-on-flexlayout/blob/main/demo/demo3.png?raw=true)
