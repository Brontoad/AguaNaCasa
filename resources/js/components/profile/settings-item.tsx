export interface SettingsItemProps {title: string, subtitle: string, handlerTitle: string, handler(): void};

export default function SettingsItem({title, subtitle, handlerTitle, handler}: SettingsItemProps) {
    return (
        <div className="settings-item">
            <div className="settings-info">
                <h4>{title}</h4><p>{subtitle}</p>
            </div>
            <button className="edit-btn" onClick={() => handler()}>{handlerTitle}</button>
        </div>
    )
}