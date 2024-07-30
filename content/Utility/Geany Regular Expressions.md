---
tags:
  - geany
---

### Geany Inline Help
|  |  |
|---|---|
|.|Matches any character.|
|(|This marks the start of a region for tagging a match.|
|)|This marks the end of a tagged region.|
|\n|Where n is 1 through 9 refers to the first through ninth tagged region when searching or replacing.<br><br>Searching for (Wiki)\1 matches WikiWiki.<br><br>If the search string was Fred([1-9])XXX and the replace string was Sam\1YYY, when applied to Fred2XXX this would generate Sam2YYY.|
|\0|When replacing, the whole matching text.|
|\b|This matches a word boundary.|
|\c|A backslash followed by d, D, s, S, w or W, becomes a character class (both inside and outside sets []).<br><br>- d: decimal digits<br>- D: any char except decimal digits<br>- s: whitespace (space, \t \n \r \f \v)<br>- S: any char except whitespace (see above)<br>- w: alphanumeric & underscore<br>- W: any char except alphanumeric & underscore|
|\x|This allows you to use a character x that would otherwise have a special meaning. For example, \[ would be interpreted as [ and not as the start of a character set. Use \\ for a literal backslash.|
|[...]|Matches one of the characters in the set. If the first character in the set is ^, it matches the characters NOT in the set, i.e. complements the set. A shorthand S-E (start dash end) is used to specify a set of characters S up to E, inclusive.<br><br>The special characters ] and - have no special meaning if they appear first in the set. - can also be last in the set. To include both, put ] first: []A-Z-].<br><br>Examples:<br><br>[]\|-]    matches these 3 chars<br>[]-\|]    matches from ] to \| chars<br>[a-z]    any lowercase alpha<br>[^]-]    any char except - and ]<br>[^A-Z]   any char except uppercase alpha<br>[a-zA-Z] any alpha|
|^|This matches the start of a line (unless used inside a set, see above).|
|$|This matches the end of a line.|
|*|This matches 0 or more times. For example, Sa*m matches Sm, Sam, Saam, Saaam and so on.|
|+|This matches 1 or more times. For example, Sa+m matches Sam, Saam, Saaam and so on.|
|?|This matches 0 or 1 time(s). For example, Joh?n matches John, Jon.|
*Quelle*: Geany Help: .../html/index.html#regular-expressions


### Geany Online Documentation

| [](https://www.geany.org/manual/gtk/glib/glib-regex-syntax.html) | Metacharacters outside square brackets |
|:-:|---|
|\\|general escape character with several uses|
|^|assert start of string (or line, in multiline mode)|
|$|assert end of string (or line, in multiline mode)|
|.|match any character except newline (by default)|
|[|start character class definition|
|\||start of alternative branch|
|(|start subpattern|
|)|end subpattern|
|?|extends the meaning of (, or 0/1 quantifier, or quantifier minimizer|
|*|0 or more quantifier|
|+|1 or more quantifier, also "possessive quantifier"|
|{|start min/max quantifier|

| [](https://www.geany.org/manual/gtk/glib/glib-regex-syntax.html) | Metacharacters inside square brackets |
|:-:|---|
|\\|general escape character|
|^|negate the class, but only if the first character|
|-|indicates character range|
|[|POSIX character class (only if followed by POSIX syntax)|
|]|terminates the character class|

| [](https://www.geany.org/manual/gtk/glib/glib-regex-syntax.html) | Non-printing characters |
|:-:|---|
|\a|alarm, that is, the BEL character (hex 07)|
|\cx|"control-x", where x is any character|
|\e|escape (hex 1B)|
|\f|formfeed (hex 0C)|
|\n|newline (hex 0A)|
|\r|carriage return (hex 0D)|
|\t|tab (hex 09)|
|\ddd|character with octal code ddd, or backreference|
|\xhh|character with hex code hh|
|\x{hhh..}|character with hex code hhh..|

| [](https://www.geany.org/manual/gtk/glib/glib-regex-syntax.html) | Non-printing character codes |
|:-:|---|
|\040|is another way of writing a space|
|\40|is the same, provided there are fewer than 40 previous capturing subpatterns|
|\7|is always a back reference|
|\11|might be a back reference, or another way of writing a tab|
|\011|is always a tab|
|\0113|is a tab followed by the character "3"|
|\113|might be a back reference, otherwise the character with octal code 113|
|\377|might be a back reference, otherwise the byte consisting entirely of 1 bits|
|\81|is either a back reference, or a binary zero followed by the two characters "8" and "1"|

| [](https://www.geany.org/manual/gtk/glib/glib-regex-syntax.html) | Generic characters |
|:-:|---|
|\d|any decimal digit|
|\D|any character that is not a decimal digit|
|\s|any whitespace character|
|\S|any character that is not a whitespace character|
|\w|any "word" character|
|\W|any "non-word" character|

| [](https://www.geany.org/manual/gtk/glib/glib-regex-syntax.html) | Simple assertions |
|:-:|---|
|\b|matches at a word boundary|
|\B|matches when not at a word boundary|
|\A|matches at the start of the string|
|\Z|matches at the end of the string or before a newline at the end of the string|
|\z|matches only at the end of the string|
|\G|matches at first matching position in the string|