import './Rodape.css'

function Rodape() {
    return (
        <>
        <footer className='text-center bg-dark text-white p-3'>
            <p>
                Desenvolvido por &nbsp;
                <a href='https://linkedin.com/in/gutoxavier'
                target='_blank' className='text-danger'>Guto Xavier</a>
                &nbsp; no &nbsp;
                <a href='https://sp.senac.com.br/americana'
                target='_blank' className='text-danger'>SENAC Americana</a>
            </p>
        </footer>
        </>
    )
}

export default Rodape