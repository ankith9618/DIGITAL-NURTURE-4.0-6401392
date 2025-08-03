import {Component} from 'react';

class ComplaintRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeName: '',
      complaint: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  generateRef() {
    return  Math.floor(Math.random() *100 ).toString();
  }

  handleSubmit(event) {
    event.preventDefault(); 
    const reference = this.generateRef();
    const msg = `Thanks ${this.state.employeeName}\nYour Complaint was Submitted.\nReference ID is: ${reference}`;
    alert(msg);
    this.setState({ employeeName: '', complaint: '' });
  }

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h1 style={{ color: 'red' }}>Register your complaints here!!!</h1>
        <form onSubmit={this.handleSubmit}>
          <div style={{ marginBottom: '0.5rem' }}>
            <label style={{ marginRight: '0.5rem' }}>Name:</label>
            <input
              type="text"
              name="employeeName"
              value={this.state.employeeName}
              onChange={this.handleChange}
              required
            />
          </div>
          <div style={{ marginBottom: '0.5rem' }}>
            <label style={{ marginRight: '0.5rem' }}>Complaint:</label>
            <textarea
              name="complaint"
              value={this.state.complaint}
              onChange={this.handleChange}
              required
              rows={3}
              cols={30}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ComplaintRegister;
