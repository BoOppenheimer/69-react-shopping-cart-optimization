# Messing around with re-renders in react for a shopping cart and some methodology

Problem: have x list of items and want to add this to a list. How many times does the list need to re-render to achive this?

```jsx
<cart>
 \\shows what is selected
</cart>

<list>
  \\x number of items
  <li-item>
  <li-item>
<\list>
```



Why react re-renders?

- state changes
- props change

see if I can reduce 
useMemo
React.memo()

each component is its own thing with its own state, input (props) and output