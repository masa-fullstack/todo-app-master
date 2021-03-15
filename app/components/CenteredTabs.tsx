import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

type CenterdProps = {
  children: React.ReactNode[]
  labels: string[]
}

const CenteredTabs: React.FC<CenterdProps> = ({ children, labels }) => {
  return (
    <div className="mx-auto w-full max-w-2xl">
      <Tabs>
        <TabList>
          <div className="flex justify-around">
            {labels.map((label, index) => (
              <Tab key={index}>
                <div className="mx-3 h-6 text-center">{label}</div>
              </Tab>
            ))}
          </div>
        </TabList>
        {children.map((child, index) => (
          <TabPanel key={index}>{child}</TabPanel>
        ))}
      </Tabs>
    </div>
  )
}

export default CenteredTabs
