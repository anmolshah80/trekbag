# Trekbag

[![Build and Deploy](https://github.com/anmolshah80/trekbag/actions/workflows/deploy_production.yml/badge.svg)](https://github.com/anmolshah80/trekbag/actions/workflows/deploy_production.yml)

- Add secondary buttons to mark all the items as complete or incomplete, reset the items to initial state, and remove all items
- Add toggle functionality to mark the items as complete or incomplete
- Update the counter in the header to keep track of total items in the list and the number of items that have been marked as packed
- Add delete icon to delete an item from the list
- Sort items by `default` or the item's `name` (in _ascending_ order), or based on its `packed` and `unpacked` status
- Save items to `localStorage`
- Create `ItemsContextProvider` to wrap the _Header_, _ItemsList_ and _Sidebar_ components to avoid `props drilling`
- Create a `useItemsContext` custom hook to centralise the imports of _useContext_ react hook and _ItemsContext_, and check whether the context provider wraps the components before using the context object in those components

## To-dos

- Show warning if the user does try to add an existing item again, add the item once the user confirms
