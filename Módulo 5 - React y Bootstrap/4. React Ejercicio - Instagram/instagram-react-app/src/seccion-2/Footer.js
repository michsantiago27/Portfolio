import React from 'react';
import './footer.css';

function ElementoFooter(props) {
    return (
        <a className='elementoFooter' href={props.liga}>
            {props.value}
        </a>
    );
}


class Footer extends React.Component {
    render() {
        return (
            <div className='footer'>
                <div className='footerGrales'>
                    <ElementoFooter 
                        liga={'https://www.google.com/search?q=información'}
                        value={'Información'}
                    />
                    <ElementoFooter 
                        liga={'https://www.google.com/search?q=blog'}
                        value={'Blog'}
                    />
                    <ElementoFooter 
                        liga={'https://www.google.com/search?q=empleo'}
                        value={'Empleo'}
                    />
                    <ElementoFooter 
                        liga={'https://www.google.com/search?q=ayuda'}
                        value={'Ayuda'}
                    />
                    <ElementoFooter 
                        liga={'https://www.google.com/search?q=API'}
                        value={'API'}
                    />
                    <ElementoFooter 
                        liga={'https://www.google.com/search?q=privacidad'}
                        value={'Privacidad'}
                    />
                    <ElementoFooter 
                        liga={'https://www.google.com/search?q=Condiciones'}
                        value={'Condiciones'}
                    />
                    <ElementoFooter 
                        liga={'https://www.google.com/search?q=Cuentas+destacadas'}
                        value={'Cuentas destacadas'}
                    />
                    <ElementoFooter 
                        liga={'https://www.google.com/search?q=Hashtags'}
                        value={'Hashtags'}
                    />
                    <ElementoFooter 
                        liga={'https://www.google.com/search?q=Ubicaciones'}
                        value={'Ubicaciones'}
                    />
                </div>
                <div className='footerGrales'>
                    <ElementoFooter 
                        liga={'https://www.google.com/search?q=Español'}
                        value={'Español'}
                    />
                    <ElementoFooter 
                        liga={'https://www.google.com/search?q=Instagram'}
                        value={'c 2021 Instagram from Facebook'}
                    />
                </div>
            </div>
        )
    }
}

export default Footer;