import {writable} from "svelte/store";
import type {HomeGrid, HomeRow} from "$models/HomeGrid";

export const homegridStore = writable<HomeGrid>({rows: []});

export function addNewRow():void {
  homegridStore.update(value => {
    console.log(value.rows[value.rows.length-1])
    const row: HomeRow = {id: value.rows[value.rows.length-1] ? value.rows[value.rows.length-1].id + 1 : 0, column: undefined, element: undefined};
    value.rows = [...value.rows, row];
    return value;
  })
}

export function removeRow(rowId: number):void {
  homegridStore.update(value => {
    const newRow: HomeRow[] = value.rows.filter( (row) => row.id != rowId);
    return { rows: newRow}
  })
}
