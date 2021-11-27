import {writable} from "svelte/store";
import type {HomeGrid, HomeRow} from "$models/HomeGrid";
import {setHome} from "$lib/services/home.service";

export const homegridStore = writable<HomeGrid>();
export const editRowStore = writable<HomeRow>({})

export function addNewRowAction():void {
  homegridStore.update(value => {
    if (!value.rows || value.rows.length === 0) {
      const row: HomeRow = {id: 0, elements: []};
      value.rows = [row]
      editRowStore.set(row)
    }else {
      const row: HomeRow = {id: value.rows && value.rows[value.rows.length-1].id + 1, elements: []};
      value.rows = [...value.rows, row];
      editRowStore.set(row)
    }
    setHome(value);
    return value;
  })
}


// TODO when remove a row update editRowStore error
export function removeRowAction(rowId: number):void {
  editRowStore.set({});
  homegridStore.update(value => {
    const newRow: HomeRow[] = value.rows.filter( (row) => row.id != rowId);
    setHome({rows: newRow});
    return { rows: newRow}
  })
}

export function setEditRowAction(row: HomeRow): void {
  editRowStore.set(row);
}

export function editRowAction(row: HomeRow): void {
  homegridStore.update( (value) => {
    const newRows: HomeRow[] = value.rows.map( item => {
      if ( row.id === item.id ){
        return row;
      }else {
        return item
      }
    })
    setHome({rows: newRows});
    return { rows: newRows};
  })
}
