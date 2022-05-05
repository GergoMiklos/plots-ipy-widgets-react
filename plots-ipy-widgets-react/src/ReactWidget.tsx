import React from 'react';
import { WidgetModel } from '@jupyter-widgets/base';
import { useModelState, WidgetModelContext } from './hooks/widget-model';
import { TextInput } from "plots-widgets";

interface WidgetProps {
  model: WidgetModel;
}

function ReactWidget({ model }: WidgetProps) {
  const [value, setValue] = useModelState('value');
  const label = model.get('label')
  const containerStyle = {
    padding: '0.5em',
    background: 'whitesmoke',
    borderRadius: '0.5em'
  }

    // <input
    //     style={inputStyle}
    //     type="text"
    //     value={name}
    //     onChange={(e) => setName(e.target.value)}
    // />

    return (
    <div className="Widget" style={containerStyle}>
        <TextInput
            label={label}
            value={value}
            onChange={({ value }: any) => setValue(value)}
        />
    </div>
  );
}

function withModelContext(Component: (props: WidgetProps) => JSX.Element) {
  return (props: WidgetProps) => (
    <WidgetModelContext.Provider value={props.model}>
      <Component {...props} />
    </WidgetModelContext.Provider>
  );
}

export default withModelContext(ReactWidget);
