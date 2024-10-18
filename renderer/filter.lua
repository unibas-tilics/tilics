function Image(el)
    return {}  -- Return an empty table to remove the image
end

function Figure(el)
    return {}  -- Return an empty table to remove the figure element
end

function Pandoc(el)
    local body = {}
    for _, item in ipairs(el.blocks) do
        if item.t == "Header" and item.level == 2 then
            break
        end
      
        table.insert(body, item)  -- Keep items until the flag is set
    end
    return pandoc.Pandoc(body)  -- Return the modified body
end
