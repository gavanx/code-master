import * as React from 'react'
import { DropdownState, ToolbarDropdown } from '../toolbar/dropdown'


export class MemberDropdown extends React.Component<any, any> {
  public constructor(props: {}) {
    super(props)
    this.state = {
      currentMember: undefined,
      currentState: 'closed',
    }
  }

  private setMember = (currentMember: any) => {
    this.setState({ currentMember, currentState: 'closed' })
  }

  private renderList = () => {
    const { currentMember } = this.state
    return (
      <div style={{ width: 150, paddingLeft: 15 }}>
        {members.map(m => (
          // eslint-disable-next-line react/jsx-no-bind
          <div key={m} style={{ padding: '5px 0', fontWeight: currentMember === m ? 'bold' : 'normal' }} onClick={() => this.setMember(m)}>{m}</div>
        ))}
      </div>
    )
  }

  private onDropDownStateChanged = (currentState: DropdownState) => {
    this.setState({ currentState })
  }

  public render() {
    const { currentState, currentMember } = this.state
    return (
      <ToolbarDropdown
        title={currentMember ? currentMember : '所有'}
        description="人员列表"
        dropdownContentRenderer={this.renderList}
        onDropdownStateChanged={this.onDropDownStateChanged}
        dropdownState={currentState}
      />
    )
  }
}

const members = [
  'guoming3',
  'duangui',
  'yaobowen',
  'huyan1',
  'chengzhuo',
  'liuwenhao',
  'wuzekang',
  'suwei',
  'yihaiyang',
  'xushengqiang',
  'wangxi',
  'all'
]
