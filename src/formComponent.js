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
        const  target=event.target.name;
        const  value=event.target.value;

        this.setState({
            fields:{...this.state.fields, [target]: value}
        },()=> { 
            console.log('fields state after the call to handlechange method: '+JSON.stringify(this.state.fields));
        })
    };

    //**Problem:  To handle errors, I first decided to change the errors object in the state directly by using setState each time for every field. The problem was, the errors object updated fine when I fill in the fields from top to bottom; but when I selected the fields from bottom to top, the error state does not update properly. For example, I first wrote in the third field(message) and the error showed fine, but after that, when I went to the first or second field(name,email) , the errors in those fields didn't show up.
    //**Cause: In the handleErrors Method, When the first "if" changes the state, the second "if" will use the same old state, so the "name" error will remain unchanged. 
    // **Solution: The problem was solved by copying the errors state into a new errors object called newErrors (using spread syntax). then changing the name, email and message properties in the newErrors object. finally, we assign the use setState and assign newErrors object to the errors object in state.

    handleErrors= () => {
        const {fields,touched}=this.state;
        const emailRegex=/^\w+@\w+\.[a-zA-Z]{2,4}$/;
        const newErrors={...this.state.errors}

        // *** making sure the touched object is changed before changing errors object:
        console.log('touched state after the call to handleErrors method: '+JSON.stringify(this.state.touched));
        //  

        if(touched.name) {
            if(fields.name.length<2 || fields.name.length>20) {
                newErrors.name='Your name should be between 2 and 20 characters'
                    console.log('name field:::errors object immediately after state update:'+JSON.stringify(this.state.errors));
            } else {
                newErrors.name=''
            }
        };

        if(touched.email) {
            if(!(fields.email.match(emailRegex)) || fields.email.length>50) {
                newErrors.email='Invalid Email'
                console.log('email field:::errors object immediately after state update:'+JSON.stringify(this.state.errors));
            }
            else {
                newErrors.email=''
            }
        };

        if(touched.message) {
            if(fields.message.length<6 || fields.message.length>400) {
                newErrors.message='Cannot be less than 6 or more than 400 characters'
                console.log('message field:::errors object immediately after state update:'+JSON.stringify(this.state.errors));
            }
            else {
                newErrors.message=''
            }
        };
        this.setState({errors:newErrors})
        console.dir(this.state.errors);

    };

    checkField =(field) => () => {
        this.setState({
            touched : {...this.state.touched, [field]:true}
        },()=> { 
            console.log('touched state before calling handleErrors method: '+JSON.stringify(this.state.touched));
            this.handleErrors();
        })
    };

    handleSubmit= (event) => {
        event.preventDefault();

        if (!this.state.fields.name || !this.state.fields.email || !this.state.fields.message) {
            this.setState({
                errors: {...this.state.errors, submit:'There are still empty fields'}
            })
        } else {
        alert('thanks for your message');
        }
    };

    render() {    
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Your Name</label>
                <input 
                    type="text" name="name" id="name" placeholder="Name" 
                    value={this.state.fields.name} onChange={this.handleChange}
                    onBlur={this.checkField('name')}    
                />
                <div className="errors">{this.state.errors.name}</div>
                <label htmlFor="email">Your email</label>
                <input 
                    type="text" name="email" id="email" placeholder="Email" 
                    value={this.state.fields.email} onChange={this.handleChange}
                    onBlur={this.checkField('email')}   
                />
                <div className="errors">{this.state.errors.email}</div>
                <label htmlFor="message">Your Message</label>
                <textarea 
                    type="text" name="message" id="message" placeholder="Message" 
                    rows='10' cols='30' 
                    value={this.state.fields.message} onChange={this.handleChange}
                    onBlur={this.checkField('message')}    
                />
                <div className="errors">{this.state.errors.message}</div>
                <div className="flex justify-center">
                    <button type="submit" className="bg-indigo-500 rounded-md py-2 px-3">Send Message</button>
                    <div className="errors">{this.state.errors.submit}</div>
                </div>
            </form>
        )
    }
}

export default ContactForm;