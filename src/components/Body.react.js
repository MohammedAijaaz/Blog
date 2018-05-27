import React, {Component} from 'react'
import BlogCard from './BlogCard.react'

export default class Body extends Component {

    constructor(props){
        super(props)
        console.log('props', props);
    }

    
    displayCards = () => {
        let blogs = this.props.data
        let blogsList = []
        for(let blog in blogs){
           blogsList.push(<BlogCard data={blogs[blog]} />)
        }
        return blogsList
    }

    render() {
        return (
            <div>
                <div style={{margin: '1em'}}>
                    {this.displayCards()}
                </div>
            </div>
        )
    }
}