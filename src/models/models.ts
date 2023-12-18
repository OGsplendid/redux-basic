export type TTask = {
    id: string,
    task: string,
    sum: string,
}

export interface IInitialState {
    userValue: TTask
    tasks: TTask[],
}

export interface IOnEdit {
    onEdit: boolean,
    onEditId: string,
}

export interface IFilter {
    currentFilter: string,
}
