# calculate the value of your fish
a rather useless tool for Stardew Valley fishing. this is a small project i'm using to learn/practice vanilla JS and git.

## TODO
- make the single line calc a component
- add/remove fish to be calculated, iterate over components
  - array of components, indices as part of id names
  - iterate over fish values to build type select box
  - sum and display results
- restrict number input to positive
- handle NaN results in a sensible way (render zero)
- preventDefault() on textbox submission (hitting Enter)
- proper CSS
- fish data in seperate file/module/JSON?
  - build fish data object from existing source/website?

## DONE
- update on form change event
- multiply for profession bonuses
  - check for Angler, else if for Fisher
- round for profession bonuses, according to SV numbers
- set up Github repo, publish MVP