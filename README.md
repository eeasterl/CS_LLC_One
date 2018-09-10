# CS_LLC_One
A brief introduction to classes and design patterns. I expect much of the following will be new, so please look up the terms that you do not understand. I promise this will aid you in your studies later on.

# classes
A class is just a thing that holds data and has some functions to help it do its work. Classes are like legos, sometimes the lego can only be put in one place, but more often they can be placed whereever you would like. When working with classes... aim for the latter approach, ie, make them reusable. 

You'll do yourself a favor if you make them single purposed as well. Classes should never do more than one thing; accomplish one idea. For example, say you have to get some data from the database and send that to the client. Although you may percieve this as one idea, there are several steps needed, and each step should be its own class. Create a repository to work with a single database table. Use a mapper to mutate the database model into a domain model and conversely. And finally, have your controller ask the repository for the domainn model (You might even make a class to transform the data into JSON iff the controller does not do so automagically) and then send that domain model to your front end. Look up these class names, they are well known patterns, which brings us to:

# design patterns
A design pattern is a known, empiracal solution to a common problem. There are many. 

# the Singleton design pattern
We looked at the Singleton design pattern, which you may clone this repo to obtain. It is the most simple pattern to start with. It keeps an instance of itself and returns that same instance whenever you new one up or use its familiar getInstance() method. Why would you want to return the same object? There are numerous cases where this is beneficial: caches, mediators, a Redux store for those of you familiar with React JS and in instances where usage is ubiquitous, for example logging. Also, Node JS creates a singleton for each class you require, so that if you require the same class in 20 files, you just get a reference to that one, not 20 copies of it. This should be clear going forward, as we (the LLC) will continue to use node for many of our projects. We will also use the singleton so please familiarize yourself with it thoroughly.

# Running the example code
Open a terminal and type:
```javascript
    git clone https://github.com/eeasterl/CS_LLC_One.git
    cd CS_LLC_One
    node main.js
```
