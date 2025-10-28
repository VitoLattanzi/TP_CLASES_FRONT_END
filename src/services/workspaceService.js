import ENVIRONMENT from "../config/environment";

export async function GetWorkspaces() { 
    const response_http  = await fetch ( 
        ENVIRONMENT.URL_API + '/api/workspace',
        {
            method: 'GET',
            headers: {
                "Authorization": "Bearer" + localStorage.getItem('auth_token')

            }
        }
    )    

    if(!response_http.ok){
        throw new Error('error al obtener los workspaces')
    }
    const response = await response_http.json()
    return response_http
}