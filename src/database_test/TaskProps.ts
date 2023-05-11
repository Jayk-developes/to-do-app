export interface ITask {
  name: string,
  description: string,
  is_state: string,
  priority: string,
  start: string,
  end: string
  tid: number
  ticket?: string
}
