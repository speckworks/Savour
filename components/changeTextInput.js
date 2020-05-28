export const changeTextInput=(args)=>{     
    this.setState({
      [args.target.name]: args.target.value
    })
}