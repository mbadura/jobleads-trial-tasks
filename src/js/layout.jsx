import React from 'react';

// layout components
import Footer from './3-components/footer';

/**
 * @property {React.Component} HeaderType - Header component. default is header.jsx
 * @property {React.Component} FooterType - Footer component. default is footer.jsx
 * @description Wraps content with default or custom header and footer.
 */
export default class Layout extends React.Component {

    constructor(props) {
        super(props);

        let brand = this.props.match.params.brand || 'dm';
        if (brand !== this.props.match.params.brand) {
            this.props.history.push(`/${brand}${this.props.location.pathname}`)
        }

        this.props.setBrand(brand);
    }

    componentDidMount() {

    }

    HeaderSelector () {

        if (this.props.HeaderType && this.props.HeaderType !== '') {
            return <this.props.HeaderType {...this.props} />
        }
        else {
            return <Header {...this.props} />
        }
    }

    FooterSelector () {

        if (this.props.FooterType && this.props.FooterType !== '') {
            return <this.props.FooterType {...this.props} />
        }
        else {
            return <Footer {...this.props} />
        }
    }

    render() {
        return (
            <div className="c-container__content">
                {this.HeaderSelector()}
                {this.props.children}
                {this.FooterSelector()}
            </div>
        )
    }
}
