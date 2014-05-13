burden
=========

A worry-free, static blog generator

[Documentation](http://burden.io/docs/)

Getting Started
---------------

You can install the CLI tool for scaffolding a burden blog with the following command:

`npm install -g burden-cli`

Once you've installed the CLI tool, you're ready to scaffold your site.

```
burden <blogname>
cd <blogname>
npm install
```

Once you've initialized your site, you'll need the "grunt" task runner to interact with it.

`npm install -g grunt`

Now you can manage your blog

```
# Create a post
grunt new-post:"Hello, World"

# Create a page
grunt new-page:"About"

# Preview site
grunt preview

# Publish your site
grunt publish
```

Adding to an Existing Project
-----------------------------

You can install Burden into an existing blog from npm.

`npm install --save burden`

This will install the "burden" package inside your `node_modules` folder and save it as a dependency in your `package.json` file.
