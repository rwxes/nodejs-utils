nodejs-utils
============

Bunch of little utilities that I use globally for day to day activies. Might be good for learning basic javascript/node stuff though as I comment most of them.

##tcp-argv.js##

Connect to tcp port and send a message via console arguments. ```est``` = connection established. ```sent``` = message sent. ```end.``` = connection ended.

```
$ node tcp-argv.js 192.168.0.0 8080 This is an awesome message!
```

Use ```l``` as shortkey for ```127.0.0.1```

```
$ node tcp-argv.js l 8080 This is an awesome message!
```
