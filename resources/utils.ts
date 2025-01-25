export function snapToStep(target: HTMLInputElement, steps: number[])
{
    const inputValue = parseFloat(target.value);
    for(let i = 1; i < steps.length; i++)
    {
        const value = steps[i];
        const lastValue = steps[i-1];
        const distanceFromValue = Math.abs(value - inputValue);
        const distanceFromLastValue = Math.abs(lastValue - inputValue);
        const isCloserToNewValue = Math.min(distanceFromValue, distanceFromLastValue) == distanceFromValue;
        if(isCloserToNewValue)
        {
            target.value = value.toString();
        }
        else
        {
            target.value = lastValue.toString();
            break;
        }
    }
}

export function createOptionElement(value: number)
{
    const option = document.createElement('option');
    const stringValue = value.toString();
    option.value = stringValue;
    option.textContent = stringValue;
    return option;
}