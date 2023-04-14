export enum CacheType {
  Local,
  Session,
}
class Cache {
  storage: Storage

  constructor(type: CacheType) {
    this.storage = type === CacheType.Local ? localStorage : sessionStorage
  }

  setCatch(key: string, value: any) {
    if (value) {
      this.storage.setItem(key, JSON.stringify(value))
    }
  }

  getCatch(key: string) {
    const value = this.storage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  deleteCatch(key: string) {
    this.storage.removeItem(key)
  }

  clearCatch() {
    this.storage.clear()
  }
}

// const localCache = new Cache(CacheType.Local)
// const sessionCache = new Cache(CacheType.Session)

export { Cache }
