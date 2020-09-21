# 🚀 Using Typescript in both side of Hosting and Functions

## Start emulator and typescript transpiler with watch option

```bash
> webpack

> firebase emulators:start --inspect-functions

> tsc -w --project ./functions/tsconfig.json
```

![ScreenShot](screenshots/commands.png)
![ScreenShot](screenshots/executed-commands.png)

## Connect with VSCode debugger

### Functions-side (for back-end typescript)

Attach
![ScreenShot](screenshots/attach.png)

9229 is default port for functions remote debugging
![ScreenShot](screenshots/9299.png)

You can mark a breakpoint in VSCode
![ScreenShot](screenshots/debugger.png)

### Hosting-side (for frond-end typescript)

Define new launch configuration into launch.json
![ScreenShot](screenshots/launch-setting.png)

```
{
  "configurations": [

    {
      "name": "Launch Chrome",
      "request": "launch",
      "type": "pwa-chrome",
      "url": "http://localhost:5000",
      "webRoot": "${workspaceFolder}"
    }
  ]
}
```

You're able to mark a breakpoint in VSCode
![ScreenShot](screenshots/frontend-breakpoint.png)

## You have to prepare these files

I ignored these files from github repo.

### firebaseInit.ts

```
export const firebaseConfig = {
  apiKey: --,
  authDomain: --,
  databaseURL: --,
  projectId: --,
  storageBucket: --,
  messagingSenderId: --,
  appId: --
};
```

Only this basic configuration was defined in.

### .firebaserc

Make this with the firebase init command.
But firebase.json file also would be overrided. So you should override again as same as with this repo's one.

## Video recoding.

Video recoding is here.
[![Typescript debugging in hosting and functions side within firebase](./screenshots/video-thumb.png)](https://www.youtube.com/watch?v=K5bgHsTLopE)
