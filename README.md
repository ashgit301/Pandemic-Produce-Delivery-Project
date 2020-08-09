<!-- project bg image, might want to replace it something more descriptive in the future -->
<p align="center">
  <img
    src="/public/readme/illustration-images/project-bg.png"
    height="100"
    width="352"
    alt="project readme background"
  />
</p>

[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

 <a href="https://www.netlify.com">
    <img
      src="https://img.shields.io/badge/deploys%20by-netlify-00c7b7.svg?style=flat-square"
      alt="deploys by netlify"
    />
  </a>

# About Our Online Shop

Welcome to our Seattle produce delivery shop!

During the ongoing pandemic, getting groceries can sometimes be a **real challenge**. The scarcity can go beyond delivery time slots. Items you order can run out of stock before being delivered, and if you venture to the store, you may find slim pickings in some aisles.

It all started out a few weeks ago, when several people in our Seattle neighborhood decided to organize a no-contact delivery service to help people in need. We noticed that some of our friends or family members find it challenging to go out to shop, either due to shortage of mask supplies or health reasons. Most of them were worried about their safety, and whether they were able to always get the goods that they wanted if they went out to shop. Understanding their concerns, we decided to start this **non-profit community service** and deliver the produce to people's doors without any charge. We currently have around 5 people in our neighborhood as our regular customers.

**The website is our next phase of expansion.** We are planning to contact wholesalers in the greater Seattle area and directly order products from them. This would save us more time to order and fetch the products. It will also open up a broader variety of quality produces for the customers. We are planning on using this website as a platform for customers to order goods directly.

<br />

# Open-source Team

Our shop platform is an open-source project, and we are always looking for more like-minded developers who would like to contribute! These are our current [**contributors**](https://github.com/hanszhang00/Seattle-Produce-Delivery-in-Pandemic/graphs/contributors) helping push the project forward each day.

#### [Hans Zhang](https://github.com/hanszhang00) - Organizer/Developer

<img align="left" width="120" height="120" style="border-radius:50%" src="public/readme/contributors/hans.JPG">
  <br /><p>I am Hans. I am currently pusuing a computer science major at Univerisity of Washington. I am really excited to build up this website using my programming skills, and I am even more excited to collaborate with other amazing developers to contribute to something meaningful.</p>

<br />
<br />

# Join our open-source Project!

## Motivation for open-source

This is a **beginner-friendly** open-source project aimed for **social good**. We are always looking for more passionate programmers, like you, to contribute! 💪💪💪

Open-source project is powerful because it lowers the barriers to adoption and collaboration, allowing people to spread and improve projects quickly. It also is a perfect place for anyne to hone their programming skills and share their visions and ideas with like-minded others. Here are three major reasons as to why you should contribute to our open-source project!

- **Collaboration**: Open-source project can accept changes from anyone in the world.
- **Adoption**: Open source project can be used by anyone for nearly any purpose.
- **Transparency**: Anyone can inspect an open source project for errors and making small and big improvements.

If you are still confused about the concept of open source and would like to learn more, check out the [**Github's official guide!**](https://github.com/open-source)

## Coding for social good

I am a firm believer that a personal project is **so much more meaningful** if it brings positive impact to the soceity.

I have always been in awe of people who strive to make a change in the world. The philanthropists and activists on the television, in interviews, and in books inspire me with their radiating passion for what they stand for, and I used to hope that one day I could be passionate enough about something to also create change in the world.

And now, here I am, launching **the first open-source project here on Github**. This is an opportunity for people to connect with others who share the same drive for creating positive changes around us.

## It can be overwhelming

I remember the first time I tried to make contribution to an open-source. The experience was quite overwhelming. There were so many things I did not understand about the project, and I couldn't even understand the command lines that were used for setting up the project.

Even now, I am by no means an experienced programmer. There's still so much I am learning everyday. I started programming about two years ago, and it has been a challenging yet exciting journey. One of my regrets I had along the way was failing to discover the beauty of contributing to an open-source. Somehow in my mind, I always thought that I need to be an experinced developer to be able to contribute. But **THAT IS TOTALLY NOT THE CASE**. All you need is a heart to contribute, a willpower that drives you forward, even after failure, and a faith that you will succeed if you keep at it.

I want to make sure your experience here is a **positive, friendly, and exciting one**. Together we can foster a loving community for developers.

## Join us!

I started this project in hope that the delivery service **will not simply be limited to our Seattle neighborhood, but rather anywhere else in the world.** ♥️♥️♥️

Long before the idea of creating an open-source project even came to my mind, there were already kind-hearted people who were oferring such services to others in need in the neighborhood. So even without our online shop in place and out there ready to serve, you can do something for your community right now, regardless of where you are! 🎉♥

With that said, I would **really really encourge you to fork and use this project in whatever way you want. Feel free to redesign it in your own language, for your own neighborhood . Let's keep spreading love during this challenging time.**

Once you join our project and make your first contribution, we will list you as one of our [**contributors**](https://github.com/hanszhang00/Seattle-Produce-Delivery-in-Pandemic/graphs/contributors) and add your profile in our [**README.md section**](#Open-source-Team). I truly believe that working on an open-source project will make you a better programmer and communicator, and it will also give you something meaningful to talk about when you talk to a recruitor (if you are going to industry in the future)!

Whether it is because of your **passion for social good**, or your desire to **hone your web programming skills**, or simply to find an opportunity to **gain some experiences programming with others**, we would love to have you.

- Our slack server is coming up soon! <br />
- If you have any hesitations, questions, or concerns. Feel free to [**send me at email**](mailto:hanszhang2000@gmail.com). Happy to connect!

<br />

# Project Setup

Now that you've made your decision to make your first contribution. Here's how to set it up.

## General Setup

1. **Fork and clone the project**.

   - If you are fairly new to Github or Git, please checkout the [**official Github Guide!**](https://guides.github.com/activities/forking/)

2. **Use your favorite text editor**

   - Personally I use VScode. You are welcome to use any of your preferences!

3. **From the root directory of the project, install dependencies with npm**
4. ```javascript
   npm install    // install dependencies of frontend
   cd server    // nagivate to the server directory
   npm install    // install dependencies of backend
   ```

5. **Configure the appropriate [environment variables](#configuring-environment-variables)**

6. **Running only the frontend**

   - This means that you will be able to run the website locally without most of the shop features. Since all of the produce information are fetched from the backend server, you won't be able to access any of the produce, thus the shop page will be listed as empty. If you have not set up the Google firebase, your sign-in and sign-up page also will not be functioning. However, you can use this if you are **only interested in changing the styles of frontend compoennts.**

   From your root directory:

   ```
     npm start
   ```

   Visit the frontend application in your browser at **http://localhost:3000**

   - Note: your frontend server will hot reload whenever you save on a file, a feature of React

7. **Running frontend and backend**

   - This will give you access to the entirety of the application. Note that you need to set up the **Google Firebase and prepopulate products** using the Admin page in your application before being able to use the products in the shop page.

   From your root directory:

   ```javascript
     cd server
     npm run build   // you can change the command in package.json, but don't push it to Github
   ```

   This will spin up **both** your frontend React and backend Express server.

   - Visit the frontend application in your browser at **http://localhost:3000**
   - Your backend server is listening on port **5000**

## Configuring Project

### .env file on the backend

On our backend, our application uses **[MongoDB](https://www.mongodb.com/)** to store produce-related information and the **[Stripe API](https://stripe.com/)** to process user payments. Note that even though the user payment's logic is set up on the back-end, you **won't be able to process payment in the shop checkout page**, since the application has not reached the deployment process.

Our application uses [**environmental variables**](https://en.wikipedia.org/wiki/Environment_variable) to manage configuration for both MongoDB and Stripe on the backend. These values are set in a `.env` file in the project root directory that **SHOULD NOT BE PUSHED TO GITHUB for safety reasons**. Each developer **\*should set up their own account's connection string on their own local machine instead.**

We have provivded you with an example of `.env` file in the root directory.

To set up a `.env`, copy the `.env.example` file, which lists needed configuration values. For example, in the Mac OS terminal:

```
cp .env.example .env
```

A set variable in the `.env` file will look like this:

```
mongooseConnection='your own connection string'
```

Change the `'your own connection string'` to **your own mongooseConnection string**. You will need to create a user account at the MongoDB website, set up a free cluster as well as database, and find where the connection String is for your cluster. It should be easy!

Repeat the same process for the Stripe API. You should replace the placeholder with **your own Stripe API secret key.** If you will be working on code that is not related to the payment functionality, you **can safely ignore this part.**

**If you need to introduce a new environmental variable**, please coordinate with Hans. Make sure to add it to the `.env.example` file, and note it in your pull request.

<br />
### configuring frontend

There are **two** files you need to configure before being able to run the application.

Firstly, make sure you have signed in [**firebase**](https://firebase.google.com/) and created a new project for the application. Log into your firebase console and **configure the following setting** for user signin and authorization.

<img src="public/readme/instruction-screenshots/firebase-auth-setup.png">

Then, from the project's root directory:

```
cd src/firebase/connection
```

You will see a file named `connection-example.js`. This file sets up the connection for your
firebase client and is used by `firebase.js` in the same folder.

```
cp connection-example.js connection.js
```

Copy in your own firebase config in the `connection.js`

If you want to test out the stripe API, you need to configure the **Stripe public key** as well. From the project's root directory:

```
cd src/components/stripe-button
cp stripe-public-key-example.js stripe-public-key.js
```

From your Stripe account, copy the publishable key into `stripe-public-key.js`

**Congratulations! 🎉🎉🎉** You are done with all of the project setup! Now you can test out
whether your configuration is correct by running the project. You should now be able
to access all of the project's functionality.

(**Note**: the configuration process feels a little cumbersome right now. We hope to put all of the configuration setup into .env file in the future to make the process a little easier. If you would like to make this happen, please check out this [**issue**](https://github.com/hanszhang00/Seattle-Produce-Delivery-in-Pandemic/issues/23#issue-675722071)!)

## Understanding User Authorization

In our current shop setup, users are able to log in and log out. Users are able to sign in with their **Google account** directly. Alternatively, they are also able to **sign up** using their personal email address and password.

We currently have two types of users: **admin user** and **normal user**.

- The normal user is able to access the general functionality of the shop, including adding items to cart and checking out.
- The admin user is able to access the **admin edit-product** and **admin checkout** page that are inaccessible to normal users. In particular:

* **Admin edit-product page** enables you to add new products (with relevant product information) to Mongo Database. Other users will be able to see the new product once they refresh the page.

- **Admin checkout page** keeps track all of the successful orders made by the all of the users. We use this page to know what products users have ordered in preperation for our delivery process.

**Note**: The admin pages are still in development process (basic functionality already implemented). Help us make them better!

## User Authorization in Code

Our shop's signin logic is mostly handled by Firebase. In our `app.js`, the function onAuthStateChanged is an observer function defined by Firebase that is triggered whenever a user signs in or signs out.

```javascript
// Once the user's authentification status is changed
auth.onAuthStateChanged(async (user) => {
  if (user !== null) {
    const userRef = await createUserProfileDocument(user, [false]);
```

Note that in the function, we are calling a function called `createUserProfileDocument`. This function captures the user's information and stores it back to our firebase database, so that next time a user signs in, we are able to verify their identity.

In particular, notice that the second parameter of the function is an array containing a boolean value. The value **determines whether the user passed in will have the admin privelege or not**.
Normally, the default is false, since we don't want to grant a user the admin privelege.

In the case when you want to grant a user privelege (e.x. for your personal account), follow the following steps:

- make sure you have set up the connection for firebase
- run the server using `npm run build`
- change the paramter `[false]` to `[true]` in `createUserProfileDocument` indicate you want the admin privelege for any incoming account registration
- register a **new** email account (either through google signin or normal signup, but make sure the account doesn't store in the database) using the applicatio:
- go to your [**firebase console**](https://console.firebase.google.com/) and make sure your user entry in the firestore collection `users` has the privelege field set to `true`
- reset the paramter from `[true]` to `[false]` in your `app.js`

Now, you are able to render components conditionally by checking the user's privelege. For example, like this:

```javascript
  <Route
    exact
    path='/admin/add'
    render={() =>
      !user || !user.privelege ? (
        <Redirect to='/' />
      ) : (
        <AdminAddProductPage />
      )
    }
```

We are checking whether the user is signed in (`!user`) and whether the user has admin
privelege (`!user.privelege`) to determine rendering or redirecting.

Finally, **make sure you set your email address to be an admin account using the steps above**. Only then will you be able to add products to the database via `admin-edit-product` page ♥️.

## Adding products

Right now, your application should run ok! You should be able to log in and log out, and you are able to access all of the pages. However, notice that the shop page is all empty. This is because there's no produce stored in the database. Now it is time to add in some products!

First of all, make sure:

- you have set up the configurations successfully [**in this section**](#configuring-project)
- you have authorized your own email/gmail account [**in the previous section**](#user-authorization-in-code)

When you spin up the application, you should see the shop page **look like the following**:

<img src="public/readme/instruction-screenshots/shop-mainpage.png">
<br />
In the navbar, click on the admin tab. It should bring you to the following page.

<img src="public/readme/instruction-screenshots/edit-page%20information.png">
<br />

Now, simply type in the relevent information. Here are a few things to note:

- None of the fields should be left empty

- The image url needs to be a valid image link, like [**this**](https://i.ibb.co/Hq4tqx3/Organic-milk.jpg)

- The product type **needs to** be matching with one of the following
  - `vegetable, poultry, dairy, seafood, fruit (case insensitive)`

* A pop-up window should appear when you click the "save" button. If everything goes well, you should be able to see the product you have newly added in your shop page when you refresh the page! Otherwise, the pop-up window should display the error message.

- Our shop currently **does not support** editing the product, as well as deletion. We will continue to work on these functionalities as they are crucial. If you want to do these operations as of right now, you would need to directly go to your MongoDB console and modify your database content.

## Stripe checkout

Since our project is currently in the development process, the stripe checkout is only valid for **test checkout**.

**WARNING: PLEASE DON'T ENTER YOUR PERSONAL CREDIT CARD INFORMATION!!**

Instead, if you want to test out the stripe functionality, you can use the dummy card information provided by Stripe.

- The card number is 4242-4242-4242-4242
- The exp date can be any date after the current date as you are typing it.
- The CVC number is any 3-digit number.
- **Do not** use the 'Remember me' option.

Since this is pretty important, someone might want to add **a line of warning** at the bottom of the checkout page. Here's the [**issue**](https://github.com/hanszhang00/Seattle-Produce-Delivery-in-Pandemic/issues/24) if anyone likes to add work on it!

After you have sucessfully made the test payment, you should see a pop-up window that displays **Your payment is successful. We will be in touch through email soon.** Now, all of the products a customer has checked out and paid for has been added to the MongoDB database (feel free to check yourself)!

**Cool! Keep hacking!!** ♥️🎉

# Contributing

The previous parts help you set up the project. Please refer to the [**CONTRIBUTING.md**](/CONTRIBUTING.md) if you would like to take a further step to contribute!

# Special Thanks

Some of the project structure and technical knowledge are made possible by the awesome Udemy course instructor [**Andrei**](https://www.udemy.com/user/andrei-neagoie/) and [**Yihua**](https://www.udemy.com/user/yihua-zhang-5/). A huge thanks to both of them! ☺️♥️

# License

See the [**LICENSE**](/LICENSE.md) file for license rights and limitations (MIT).
