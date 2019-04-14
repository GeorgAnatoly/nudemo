/*

    handleTextArea = (event) => {
        this.setState({textArea: event.target.value});
    };

    nosePick = (event) => {
        this.setState({nose: event.target.value});
    };

    isGoingChangeHandler = (event) => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    };

<form>
                    <label>
                        Essay:
                        <textarea value={this.state.textArea}
                                  onChange={this.handleTextArea} />
                    </label>
                </form>

                <form>
                    <label>
                        Pick Your NosE!
                        <select value={this.state.nose}
                                onChange={this.nosePick}>
                            <option value="Fuck">Fuck</option>
                            <option value="You">You</option>
                            <option value="coconut">Coconut</option>
                        </select>
                    </label>
                </form>

                <form>
                    <input type="file" />
                </form>

                <form>
                    <label>
                        Is Going:
                        <input
                            name="isGoing"
                            type="checkBox"
                            checked={this.state.isGoing}
                            onChange={this.isGoingChangeHandler} />
                    </label>
                    <br />
                    <label>
                        Number of Guests:
                        <input
                            name={"numberOfGuests"}
                            type={"number"}
                            value={this.state.numberOfGuests}
                            onChange={this.isGoingChangeHandler} />
                    </label>
                </form>

               <input value={"input-locked"}/>

               <Welcome />


<!-- input lock can be changed when user has done something
                 like accepted 'agree to terms' or some other condition
                 has been met, for example time passing or some
                 variable having met some condition -->
 */