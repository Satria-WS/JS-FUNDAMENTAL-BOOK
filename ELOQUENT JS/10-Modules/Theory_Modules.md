//## Module
A module is a piece of program that specifies which other pieces it relies on
and which functionality it provides for other modules to use (its interface).




//## Packages
One of the advantages of building a program out of separate pieces, and being
actually able to run those pieces on their own, is that you might be able to
apply the same piece in different programs .

Once you start duplicating code, you’ll quickly find yourself wasting time
and energy moving copies around and keeping them up-to-date.
That’s where packages come in. A package is a chunk of code that can be
distributed (copied and installed).

When a problem is found in a package or a new feature is added, the package
is updated. Now the programs that depend on it (which may also be packages)
can upgrade to the new version.

We need a place to store and find packages 
and a convenient way to install and upgrade them. In the JavaScript
world, this infrastructure is provided by NPM (https://npmjs.org).