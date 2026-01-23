class LocalStorageService<State extends object> {
  storageName: string
  raw: string | null
  state: State

  constructor(storageName: string, initialState: State) {
    this.storageName = storageName
    this.raw = localStorage.getItem(this.storageName)
    this.state = this.loadFromStorage(initialState)
  }

  private loadFromStorage(initialState: State): State {
    try {
      const raw = localStorage.getItem(this.storageName)
      return raw ? JSON.parse(raw) : initialState
    } catch (error) {
      console.log(error)
      return initialState
    }
  }

  private saveToStorage() {
    try {
      localStorage.setItem(this.storageName, JSON.stringify(this.state))
    } catch (error) {
      console.log(error)
    }
  }

  setState = (newState: State) => {
    this.state = newState
    this.saveToStorage()
  }
}

export { LocalStorageService }
