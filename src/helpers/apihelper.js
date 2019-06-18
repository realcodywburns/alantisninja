
const ApiCheck = (uri) =>{
    fetch('uri'+'?module=block&action=eth_block_number')
    .then(response => response.json())
    .then(data => return(data))
}

export default ApiCheck