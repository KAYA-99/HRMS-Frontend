import React, { useEffect, useState } from 'react'
import { Header, Image, Table } from 'semantic-ui-react'
import JobAdvertisementService from '../services/jobAdvertisementService'
export default function JobAdvertisemenetList() {

    const [jobAdevertisements, setjobAdevertisements] = useState([])

    useEffect(()=>{
        let jobAdevertisementService = new JobAdvertisementService()
            jobAdevertisementService.getJobAdvertisement().then(result=>setjobAdevertisements(result.data.data))
    },[])
   

    return (
        <div>
            <Table  color="yellow">
                <Table.Header color>
                    <Table.Row>
                        <Table.HeaderCell>Şirket İsmi</Table.HeaderCell>
                        <Table.HeaderCell>Web Adresi</Table.HeaderCell>
                        <Table.HeaderCell>Telefon Numarası</Table.HeaderCell>
                        <Table.HeaderCell>İş Pozisyonu</Table.HeaderCell>
                        <Table.HeaderCell>Açık Pozisyon Adedi</Table.HeaderCell>
                        <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobAdevertisements.map(jobAdevertisement => (
                            <Table.Row key={jobAdevertisement.name}>
                                <Table.Cell>{jobAdevertisement.employer.companyName}</Table.Cell>
                                <Table.Cell>{jobAdevertisement.employer.webAddress}</Table.Cell>
                                <Table.Cell>{jobAdevertisement.employer.phoneNumber}</Table.Cell>
                                <Table.Cell>{jobAdevertisement.jobTitle.title}</Table.Cell>
                                <Table.Cell>{jobAdevertisement.openPosition}</Table.Cell>
                                <Table.Cell>{jobAdevertisement.finishDate}</Table.Cell>
                            </Table.Row>
                        ))
                    }


                </Table.Body>

                
            </Table>
        </div>
    )
}
