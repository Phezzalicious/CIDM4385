const inputs = (props) => {
    React.createElement('div',{className: "form-group form-check"}, [
                
                        React.createElement('label', {for: "inputEmailAddress"}, "Email Address"),
                        React.createElement('input', {className: "form-control",type: "email",id: "inputEmailAddress", placeholder: "Enter Email"}, ),
                        React.createElement('label', {for: "inputZipCode"}, "Zip Code"),
                        React.createElement('input', {className: "form-control",type: "zip",id: "inputZipCode", placeholder: "Enter Zip Code"}, ),
                        React.createElement('submit', {className: "btn btn-primary"}, "Submit")

])
};

