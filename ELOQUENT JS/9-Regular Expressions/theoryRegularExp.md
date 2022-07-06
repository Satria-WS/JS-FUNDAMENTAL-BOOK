Within square brackets, a hyphen (-) between two characters can be used
to indicate a range of characters, where the ordering is determined by the
character’s Unicode number. so [0-9] covers all of them and matches any
digit

A number of common character groups have their own built-in shortcuts.
Digits are one of them: \d means the same thing as [0-9].
\d Any digit character
\w An alphanumeric character (“word character”)
\s Any whitespace character (space, tab, newline, and similar)
\D A character that is not a digit
\W A nonalphanumeric character
\S A nonwhitespace character
. Any character except for newline