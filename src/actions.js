export const START_QUERY = "START_QUERY"

export function startQuery(text, position)
{
    return {
        type: START_QUERY,
        text,
        position
    }
}