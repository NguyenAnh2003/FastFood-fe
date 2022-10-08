import React, { useContext } from 'react'
import { Store } from '../../store/Store'

export default function SavedScreen() {
  const {state, dispatch: {ctxDispatch}} = useContext(Store)
  const {savedBox: {savedItems}} = state;
  console.log('save items',savedItems);
  
  return (
    <div>
      SavedPage
    </div>
  )
}
