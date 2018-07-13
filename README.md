# Grunt Gulp Webpack and Npm and when to use what

## What we will cover

* What is Grunt?
* What is Gulp?
* What is Webpack?
* What are npm scripts?
* Why are they useful?
* When do I use what?

## Notes

First let us define what a task runner is.

A task runner like Gulp and Grunt is a tool the will help you perform common
tasks like copy files or run a compiler and so on.

So what is so useful about them?

Well it is a hassle to have to do that manually so if we can create commands
we can run that does all that for us we can be more productive when we work.

So is Webpack a task runner?

Yes and no, Webpack is (ish) a bundler with a lot of flexibility.

Webpack is designed to bundle JavaScript so that you can build complex
JavaScript projects and load code from one file in to another file.

There are several things Webpack can be extended to do but it is all tied
in to that you are bundling JavaScript.

Grunt and Gulp are not tied down by this limitation and can do what the
Webpack extensions do but without needing necessarily to bundle JavaScript.

However Grunt and Gulp are not bundlers and need Webpack to do that part.

So what about Npm scripts?

Npm scripts are simply shell commands you wrap in a npm command, i.e you
create an "alias" for running one or several commands.

Think of this as a short circuit to what Grunt and Gulp are doing, instead
of using their "wrapper" you are simply using the underlying tool directly
but giving it a command so you don't have to type a lot to run it.

This allows you to avoid Grunt and Gulp if you don't need them but still
want to be able to run tasks.

## Conclusion

Grunt and Gulp are tools you want to look at when you have many developers working
on a large project with different operating systems where there are several 
"tasks" involved in doing everyday things with the project.

They are perfect for when you have a lot of "tasks" but you also need to abstract
away the operating system so you can avoid using shell specific commands.

If you work as a single developer using Npm script is more than enough most of the time
because Gulp and Grunt are often just wrapping another tool you can run directly in
your shell.

Webpack is a bundler that can do many different things but you should use it primarily
for bundling JavaScript and try to keep away from using too many plugins as it
starts to slow down the bundling process a lot when the project grows.

Ideally you want to use Webpack for what it was made for and use Npm script, Grunt and Gulp
for anything that can be done outside of the bundling process.
