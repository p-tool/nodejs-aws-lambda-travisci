
## Step 1
creating a lambda function, 'youe-project'

![image](https://user-images.githubusercontent.com/5538753/60277601-79a75480-9930-11e9-9bf3-e29bad7e722f.png)


## Step 2
up user access, secret on `IAM`

![image](https://user-images.githubusercontent.com/5538753/60277835-eae70780-9930-11e9-9307-602c86734d30.png)

```
$ export AWS_ACCESS_KEY_ID="yourkey"
$ export AWS_SECRET_ACCESS_KEY="yoursecret"
```

## Step 3 
set up lambda function name on

 - `./lambda/yourname`
 - set your name here: `./lambda/yourname/package.json`

![image](https://user-images.githubusercontent.com/5538753/60279628-0273bf80-9934-11e9-91ec-a3b1f8262ec8.png)


## Step 4
clone this project and run

```
$ npm deploy
```
