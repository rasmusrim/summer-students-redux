import React from 'react'
import { connect } from 'react-redux'

 function Output(props: any) {
    return (
        <div>
            You entered { props.name }
        </div>
    )
}

let mapStateToProps = (state: any, ownProps: any) => {
    return {
        name: state.name
    }
}



export default connect(mapStateToProps, null)(Output)