import axios from 'axios';
import * as actions from './type'

export const dbGetList = () => (dispatch, getState) => {
  const{list, page} = getState().reducer

  axios.get(`https://anapioficeandfire.com/api/characters?page=${page}&pageSize=30`).then(
    resp => {
      dispatch({type: actions.GETPAGE, payload: page + 1})
      dispatch({type: actions.GETDETAIL, payload: [...list, ...resp.data]})
    }
  )
}