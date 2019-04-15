json.extract! note, :id, :name, :date_made, :description, :created_at, :updated_at
json.url note_url(note, format: :json)
