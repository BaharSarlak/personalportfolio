import {Component} from "react";

class ContactForm extends Component {
    constructor(props) {
        super(props)
        this.state= {
            fields: { 
                name:'',
                email:'',
                message:''
            },
            touched: {
                name: false,
                email: false,
                message: false
            },
            errors: {
                name:'',
                email:'',
                message:'',
                submit:''
            }
        }
    }

    handleChange= (event) => {
        let target=event.target.name
        let value=event.target.value
        this.setState({
            fields:{...this.state.fields, [target]: value}
        })
        
        console.log(this.state.fields)
    }

    handleBlur=(field) => {
        this.setState({
            touched : {...this.state.touched, [field]:true}
        })
        console.log(this.state.touched)
        
    }

    handleErrors= () => {
        let fields=this.state.fields
        let touched=this.state.touched
        let errors=this.state.errors

        if(touched.name) {
            if(fields.name.length<2 || fields.name.length>20) {
                this.setState({
                    errors: {...errors, name:'Please enter a valid name'}
                })
            } else {
                this.setState({errors:{...errors, name:''}})
            }
        }

        if(touched.message) {
            if(fields.message.length<6 || fields.message.length>400) {
                this.setState({
                    errors: {...errors, message:'Cannot be less than 6 or more than 400 characters'}
                })
            }
            else {
                this.setState({errors:{...errors, message:''}})
            }
        }

        const emailRegex=/^\w+@\w+\.[a-zA-Z]{2,4}$/
        if(touched.email) {
                if(!(fields.email.match(emailRegex)) || fields.email.length>50) {
                this.setState({
                    errors: {...errors, email:'Invalid Email'}
                })
            }
            else {
                this.setState({errors:{...errors, email:''}})
            }
        }

        console.log(this.state.errors)

    }

    checkField =(field) => () => {
        this.handleBlur(field);
        this.handleErrors()
    }

    handleSubmit= (event) => {
        event.preventDefault()

        if (!this.state.fields.name || !this.state.fields.email || !this.state.fields.message) {
            this.setState({
                errors: {...this.state.errors, submit:'There are still empty fields'}
            })
        } else {
        alert('thanks for your message')
        }
    }

    render() {
        
                
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Your Name</label>
                <input 
                    type="text" name="name" id="name" placeholder="Your Name" 
                    value={this.state.fields.name} onChange={this.handleChange}
                    onBlur={this.checkField('name')}    
                />
                <div>{this.state.errors.name}</div>
                <label htmlFor="email">Your email</label>
                <input 
                    type="text" name="email" id="email" placeholder="Your email" 
                    value={this.state.fields.email} onChange={this.handleChange}
                    onBlur={this.checkField('email')}   
                />
                <div>{this.state.errors.email}</div>
                <label htmlFor="message">Your Message</label>
                <textarea 
                    name="message" id="message" placeholder="Your message" 
                    rows='10' cols='30' 
                    value={this.state.fields.message} onChange={this.handleChange}
                    onBlur={this.checkField('message')}    
                />
                <div>{this.state.errors.message}</div>
                <button type="submit">Send Message</button>
                <div>{this.state.errors.submit}</div>
            </form>
        )
    }

}

export default ContactForm