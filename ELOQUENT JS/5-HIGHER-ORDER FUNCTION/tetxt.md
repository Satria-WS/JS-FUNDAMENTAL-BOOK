Abstraction
In the context of programming, these kinds of vocabularies are usually called
abstractions. Abstractions hide details and give us the ability to talk about
problems at a higher (or more abstract) level.
As an analogy, compare these two recipes for pea soup. The first one goes
like this:
Put 1 cup of dried peas per person into a container. Add water
until the peas are well covered. Leave the peas in water for at least
12 hours. Take the peas out of the water and put them in a cooking
pan. Add 4 cups of water per person. Cover the pan and keep the
peas simmering for two hours. Take half an onion per person. Cut
it into pieces with a knife. Add it to the peas. Take a stalk of
celery per person. Cut it into pieces with a knife. Add it to the
peas. Take a carrot per person. Cut it into pieces. With a knife!
Add it to the peas. Cook for 10 more minutes.
And this is the second recipe:
Per person: 1 cup dried split peas, half a chopped onion, a stalk of
celery, and a carrot.
Soak peas for 12 hours. Simmer for 2 hours in 4 cups of water (per
person). Chop and add vegetables. Cook for 10 more minutes.
The second is shorter and easier to interpret. But you do need to understand
a few more cooking-related words such as soak, simmer, chop, and, I guess,
vegetable.
When programming, we can’t rely on all the words we need to be waiting for
us in the dictionary. Thus, we might fall into the pattern of the first recipe—
work out the precise steps the computer has to perform, one by one, blind to
the higher-level concepts that they express.
It is a useful skill, in programming, to notice when you are working at too
low a level of abstraction.
Abstracting repetition
Plain functions, as we’ve seen them so far, are a good way to build abstractions.
But sometimes they fall short.
It is common for a program to do something a given number of times. You
can write a for loop for that, like this:
83