import React, { Component, createRef } from 'react'

interface Props {
  lists: number[]
}

interface State {
  listStack: number[]
}
export class DerivedUsing extends Component<Props, State> {
  state: State = {
    listStack: []
  }
  static getDerivedStateFromProps(
    nextProps: Props,
    prevState: State
  ): Partial<State> | null {
    if (nextProps.lists !== prevState.listStack) {
      return {
        listStack: nextProps.lists
      }
    }
    return null
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.listStack.map((list) => (
            <li key={list}>{list}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export class DerivedUsingPure extends React.PureComponent<Props> {
  private listRef = createRef<HTMLUListElement>()

  getSnapshotBeforeUpdate = (prevProps: Props) => {
    console.log('getSnapshotBeforeUpdate')
    if (prevProps.lists.length < this.props.lists.length) {
      const list = this.listRef.current
      return (list?.clientHeight ?? 0) - (list?.scrollTop ?? 0)
    }
    return null
  }

  componentDidUpdate(
    _prevProps: Readonly<Props>,
    _prevState: Readonly<object>,
    snapshot?: number | null
  ): void {
    console.log('componentDidUpdate')
    console.log(snapshot)
    if (snapshot !== null) {
      const list = this.listRef.current
      if (!list) return
      list.scrollTop = list?.clientHeight - (snapshot ?? 0)
      // list.scrollTop += 24
    }
  }
  render() {
    return (
      <div className=" overflow-x-hidden shadow-md my-4 rounded-lg">
        <ul ref={this.listRef} className="min-h-28 overflow-y-auto  p-4">
          {this.props.lists.map((list) => (
            <li key={list}>{list}</li>
          ))}
        </ul>
      </div>
    )
  }
}
