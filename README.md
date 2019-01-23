# Rooster goingnative #
#### code test by Ben Smith ####


Hello and welcome to my coding test.

Here is a quck rect-native app that will login to the Rooster api using the given correct
Access Key and Password.

### Setup
Start by installing all dependencies of `package.json`

```
    yarn install
```
> note you will need to create the .env file at the root where **** is your user and pass
```
API_URL=https://api.roostermoney.com
ACCESS_KEY=****
ACCESS_PASSWORD=****
```


### Development
```
    react-native-cli start
    react-native run-ios
```

> this app has only been tested on ios simulator.

### Testing
Jest tests have been setup for some screen views and store
```
    yarn test
```