import { Row, Col, Skeleton } from 'antd'

export default function AppCovid({ result }) {
    // console.log(result);
    if(!result.hasOwnProperty('Global')){
        return (<Skeleton active/>)
    }
    return (
        <>
            <Row>
                <Col span={12} offset={6}>
                    <h1>Thông tin Virus Corona</h1>
                    <Row>
                        <Col span={8}>
                            <p>Số ca mới nhiễm: </p>
                            <p>{result.Global.NewConfirmed.toLocaleString()}</p>
                            <p>Tổng số ca mới nhiễm: </p>
                            <p>{result.Global.TotalConfirmed.toLocaleString()}</p>
                        </Col>
                        <Col span={8}>
                            <p>Số ca mới tử vong: </p>
                            <p>{result.Global.NewDeaths.toLocaleString()}</p>
                            <p>Tổng số ca tử vong: </p>
                            <p>{result.Global.TotalDeaths.toLocaleString()}</p>
                        </Col>
                        <Col span={8}>
                            <p>Số ca mới khỏi: </p>
                            <p>{result.Global.NewRecovered.toLocaleString()}</p>
                            <p>Tổng số ca mới khỏi: </p>
                            <p>{result.Global.TotalRecovered.toLocaleString()}</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export async function getStaticProps() {
    const response = await fetch(`https://api.covid19api.com/summary`)
    const result = await response.json()
    return {
        props: {
            result,
        }
    }
}