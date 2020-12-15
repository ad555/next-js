import { Row, Col, Skeleton } from 'antd'
import { useState, useEffect } from 'react'

export default function AppCorona() {
    const [loading, setLoading] = useState(false);
    const [virus, setDataVirus] = useState({});

    useEffect( () => {
        const getDataCorona = async () => {
            try {
                await setLoading(true);
                setLoading(true)
                const response = await fetch(`https://api.covid19api.com/summary`)
                const result = await response.json()
                await setDataVirus(result)
                await setLoading(false)
            }
            catch(error) {
                console.log(error)
            }
        }

        getDataCorona()
    }, [])

    if(loading && !virus.hasOwnProperty('Global')){
        return (<Skeleton active/>)
    }

    console.log(virus['Global'])

    return (
        <>
            <Row>
                <Col span={12} offset={6}>
                    <h1>Thông tin Virus Corona</h1>
                    <Row>
                    <Col span={8}>
                            <p>Số ca mới nhiễm: </p>
                            <p>
                                {virus['Global'] !== undefined ? virus['Global']['NewConfirmed'].toLocaleString(): null}
                            </p>
                            <p>Tổng số ca mới nhiễm: </p>
                            <p>
                                {virus['Global'] !== undefined ? virus['Global']['TotalConfirmed'].toLocaleString(): null}
                            </p>
                        </Col>
                        <Col span={8}>
                            <p>Số ca mới tử vong: </p>
                            <p>
                                {virus['Global'] !== undefined ? virus['Global']['NewDeaths'].toLocaleString(): null}    
                            </p>
                            <p>Tổng số ca tử vong: </p>
                            <p>
                                {virus['Global'] !== undefined ? virus['Global']['TotalDeaths'].toLocaleString(): null}
                            </p>
                        </Col>
                        <Col span={8}>
                            <p>Số ca mới khỏi: </p>
                            <p>
                                {virus['Global'] !== undefined ? virus['Global']['NewRecovered'].toLocaleString(): null}
                            </p>
                            <p>Tổng số ca mới khỏi: </p>
                            <p>
                                {virus['Global'] !== undefined ? virus['Global']['TotalRecovered'].toLocaleString(): null}
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}
