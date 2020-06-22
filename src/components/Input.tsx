import React from 'react'
import { connect } from 'react-redux'

import { updateName } from '../actions'

function Input(props: any) {
    return (
        <div>
            <input onChange={e => props.setName(e.target.value) }/>
        </div>
    )
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        setName: (name: string) => {
            dispatch(updateName(name))
        }
    }

}

export default connect(null, mapDispatchToProps)(Input)