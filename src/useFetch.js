export const FetchAuth = {
    url: 'https://oprec-betis-be.up.railway.app/perahu',
    bearerToken: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlYjgzMjc0ZC05MWZhLTQwMjgtYWMzNC1kYjZjYzhhZGIxMDgiLCJpZCI6ImViODMyNzRkLTkxZmEtNDAyOC1hYzM0LWRiNmNjOGFkYjEwOCIsInVzZXJuYW1lIjoiU2NhcmxldHJhIiwiaWF0IjoxNzAzMjM5NzI4LCJleHAiOjE3MDU4MzE3Mjh9.TknfXgJ7qQhyD2KqW9X1nHbxmVKw1GvrrCaERMWU0s8'
}

export async function getFetch(setData, setKumpulanPerahu, url='Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlYjgzMjc0ZC05MWZhLTQwMjgtYWMzNC1kYjZjYzhhZGIxMDgiLCJpZCI6ImViODMyNzRkLTkxZmEtNDAyOC1hYzM0LWRiNmNjOGFkYjEwOCIsInVzZXJuYW1lIjoiU2NhcmxldHJhIiwiaWF0IjoxNzAzMjM5NzI4LCJleHAiOjE3MDU4MzE3Mjh9.TknfXgJ7qQhyD2KqW9X1nHbxmVKw1GvrrCaERMWU0s8') {
    try {
      const res = await fetch(FetchAuth.url, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: url,
        },
      });
  
      if (res.ok) {
        const data = await res.json()
        setData(data.daftarPerahu)
        setKumpulanPerahu(data.daftarPerahu)
        console.log("Data perahu: ", data)
      } else {
        throw new Error(`Failed to fetch data: ${res.status}`);
      }
    } catch (error) {
      console.error(error);
    }
  }
  

export async function getPerahuById(setData, boatID, bearerToken){
    fetch(`${FetchAuth.url}/${boatID}`, {
        method: "GET",
        headers: {
        "Content-type": "application/json",
        Authorization: bearerToken
        }}).then(res => {
        return res.json()
        }).then(data => {
            setData(data.perahu)
        })
}


export async function postFetch(postPerahu, bearerToken){
    fetch(FetchAuth.url, {
      method: "POST",
      headers: {
        "Content-type"  : "application/json",
        Authorization   : bearerToken
      },
      body: JSON.stringify(postPerahu)
    }).then(() => {
        console.log("Data baru tersimpan")
    }).catch(err => {
      console.log(err)
    })
}

export async function patchFetch(id, patchPerahu, bearerToken){
    fetch(FetchAuth.url + `/${id}`, {
        method: 'PATCH',
        headers: {
            "Content-type": "application/json",
            Authorization: bearerToken
        },
        body: JSON.stringify(patchPerahu)
    }).then(() => {
        console.log("Data berhasil diedit")
    }).catch(err => {
        console.log(err)
    })
}

export async function deleteFetch(id, bearerToken){
    fetch(FetchAuth.url + `/${id}`, {
        method: 'DELETE',
        headers: {
            "Content-type": "appplication/json",
            Authorization: bearerToken
        }
    }).then(() => {
        console.log("Data berhasil dihapus")
    }).catch(err => {
        console.log(err)
    })
}
