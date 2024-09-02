class Jeemacooder extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            prenomInput: "",
            nomInput: "",
            telephoneInput: "",
            emailInput: "",
            Coders: []
        }
        // bind documenter par coach Alkaly
        this.hundleClick = this.hundleClick.bind(this);
        this.hundlesupprimer=this.hundlesupprimer.bind(this)
        this.hundleModifi=this.hundleModifi.bind(this)
    }

    hundleClick() {
        const newCoder = {
            prenom: this.state.prenomInput,
            nom: this.state.nomInput,
            telephone: this.state.telephoneInput,
            email: this.state.emailInput,
        };
        this.setState({
            Coders: [newCoder, ...this.state.Coders],
            prenomInput: "",
            nomInput: "",
            emailInput: "",
            telephoneInput: ""
        });
    }

    // button pour supprimer
    hundlesupprimer(index){
        const newCoders=[...this.state.Coders];
        // supprimer
        newCoders.splice(index,1);
        this.setState ({Coders:newCoders})
    }
    // button pour modier
    hundleModifi(index){
        const editeur =this.state.Coders[index];
        this.setState({
            prenomInput:editeur.prenom,
            nomInput:editeur.nom,
            emailInput:editeur.email,
            telephoneInput:editeur.telephone,
        })
        this.hundlesupprimer(index)
    }

    render() {
        return (
            <div className="py-4">
                <p className="text-center"><b>Maaycooder Gestion d'utilisateur</b></p>
                <div className="container col-lg-6 m-auto col-12">
                    <div>
                        <div className="row">
                            <div className="col-6 py-2">
                                <label className="form-label">Prenom</label>
                                <input
                                    type="text"
                                    onChange={(e) => {
                                        this.setState({ prenomInput: e.target.value })
                                    }}
                                    value={this.state.prenomInput}
                                    className="form-control"
                                />
                            </div>
                            <div className="col-6 py-2">
                                <label className="form-label">Nom</label>
                                <input
                                    type="text"
                                    onChange={(e) => {
                                        this.setState({ nomInput: e.target.value })
                                    }}
                                    value={this.state.nomInput}
                                    className="form-control"
                                />
                            </div>
                            <div className="col-6 py-2">
                                <label className="form-label">Email</label>
                                <input
                                    type="text"
                                    onChange={(e) => {
                                        this.setState({ emailInput: e.target.value })
                                    }}
                                    value={this.state.emailInput}
                                    className="form-control"
                                />
                            </div>
                            <div className="col-6 py-2">
                                <label className="form-label">Telephone</label>
                                <input
                                    type="text"
                                    onChange={(e) => {
                                        this.setState({ telephoneInput: e.target.value })
                                    }}
                                    value={this.state.telephoneInput}
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <button
                            onClick={this.hundleClick}
                            className="btn btn-success w-100"
                        >Submit</button>
                    </div>
                </div>
                <div className="mt-5">
                    <h3 className="text-center"><b>La Liste des Coders</b></h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Prenom</th>
                                <th scope="col">Nom</th>
                                <th scope="col">Email</th>
                                <th scope="col">Telephone</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.Coders.map((coder, index) => (
                                <tr>
                                    <td>{coder.prenom}</td>
                                    <td>{coder.nom}</td>
                                    <td>{coder.email}</td>
                                    <td>{coder.telephone}</td>
                                    <td ><button className="btn btn-danger" onClick={()=>{this.hundlesupprimer(index)}}>Supprimer</button></td>
                                    <td ><button className="btn btn-success" onClick={()=>{this.hundleModifi(index)}}>Modifier</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Jeemacooder />)
